import React from 'react'
import ProfileIcon from '@/../public/images/svg/profile.svg'
import EducationIcon from '@/../public/images/svg/profile.svg'
import PublicationIcon from '@/../public/images/svg/profile.svg'
import HobbyIcon from '@/../public/images/svg/profile.svg'
import SearchIcon from '@/../public/images/svg/profile.svg'
import MembershipIcon from '@/../public/images/svg/membership.svg'

interface IProfileSection {
  type: 'profile' | 'education' | 'publication' | 'membership' | 'hobby' | 'search'
  children: React.ReactElement
}

export default function ProfileSection({ type, children }: IProfileSection) {
  console.log(type)

  return (
    <div className=" flex gap-4 items-center mb-8">
      <div className="bg-primary p-2 rounded-md w-fit">
        {type === 'profile' && <ProfileIcon />}
        {type === 'education' && <EducationIcon />}
        {type === 'publication' && <PublicationIcon />}
        {type === 'membership' && <MembershipIcon />}
        {type === 'hobby' && <HobbyIcon />}
        {type === 'search' && <SearchIcon />}
      </div>
      <h3 className='text-2xl font-bold'>{children}</h3>
    </div>
  )
}
