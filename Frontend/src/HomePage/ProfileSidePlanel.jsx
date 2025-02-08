import { LogOut, Moon, Sun, X } from 'lucide-react'
import React from 'react'
import { useContentStore } from '../store/content'
import { useAuthStore } from '../store/authStore'

function ProfileDetails({isOpen,onClose,isDarkMode,onToggleDarkMode}) {

  const {logout,user}=useAuthStore()
  console.log(user)
  return (
    <>
     {/* Overlay */}
     {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed hover:bg-blue-700 right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full' 
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold dark:text-white">Profile</h2>
            <button
               onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Profile Info */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">{user.username}</h3>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={onToggleDarkMode}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="text-gray-700 dark:text-white font-medium">
                  Dark Mode
                </span>
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              <button
                onClick={logout}
                className="w-full flex items-center justify-between px-4 py-3 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                <span className="text-red-600 dark:text-red-400 font-medium">
                  Sign Out
                </span>
                <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileDetails
