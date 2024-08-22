"use client"
import React, { useEffect, useState } from 'react';
import UserProfileForm from '@/components/forms/UserProfileForm/UserProfileForm';
import { getUserData, updateUser, updateMyUserRequest } from '@/utils/UserApi';
import Spinner from '@/components/Spinner';
import { WithAuthentication } from '@/hoc/withAutentication';

const UserProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setCurrentUser(userData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle save
  const handleSave = async (formData: updateMyUserRequest) => {
    setIsSaving(true);
    setError(null);

    try {
      await updateUser(formData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <span>{error}</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <div>
      <UserProfileForm currentUser={currentUser} onSave={handleSave} isLoading={isSaving} />
    </div>
  );
};

export default WithAuthentication(UserProfilePage);
