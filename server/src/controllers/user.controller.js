import asyncHandler from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false}) // To bypass the token validation in order to update the refreshToken

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generatin refresh and access token")
    }
}

const registerUser = asyncHandler(
    async (req, res) => {
        // get user details from frontend 
        // validation - not empty
        // check if user already exosts; username, email
        // check for images, check for avatar
        // upload them to cloudinary, avatar
        // create user object - create entry in db
        // remove password and refresh token field from response
        // check for user creation
        // return res

        const { username, email, fullname, password } = req.body;
        console.log(email)

        if(
            [fullname, email, username, password].some((field) => field?.trim() === "")
        ){
            throw new ApiError(400, "All fields are required")
        }

        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if(existedUser){
            throw new ApiError(409, "User with email or username already exists")
        }

       const user = await User.create({
            fullname,
            email, 
            password, 
            username: username.toLowerCase()
        })

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if(!createdUser){
            throw new ApiError(500, "Something went wrong while registering the user")
        }

        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered successfully")
        )

    }
)

const loginUser = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    //find the user
    // password check 
    // access and refresh token
    // send cookies

    const {email, username, password} = req.body
    console.log(email)

    if(!username && !email) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await  user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken").lean().exec()
    console.log(loggedInUser)

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
                .cookie('accessToken', accessToken ,options)
                .cookie("refreshToken", refreshToken, options)
                .json(
                    new ApiResponse(200, {
                        user: loggedInUser, accessToken, refreshToken
                    },
                    "User logged In successfully")
                )

})

const logoutUser = asyncHandler(async(req, res) => {
    User.findByIdAndUpdate(req.userId, {
        $set: {
            refreshToken: undefined
        }
    },{
        new: true
    })

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"))
})

const refreshAccessToken = asyncHandler(async(req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken) {
        throw new ApiError(401, "unauthorised request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401, "Refresh token is expired or used")
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(200,
                {
                    accessToken, refreshToken: newRefreshToken
                },"Access Token refreshed")
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }
})

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body;

    const  user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    user.save({validateBeforeSave: false})

    return res.status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
})


const getCurrentUser = asyncHandler(async(req, res) => {
    return res.status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"))
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullname, email} = req.body

    if(!fullname || !email) {
        throw new ApiError(400, "Please provide full name and email address to continue")
    }

    const user = await User.findByIdAndUpdate(req.user?._id,{
        $set: {
            fullname,
            email
        }
    },
    {new: true}).select("-password")

    return res.status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
})



export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
}