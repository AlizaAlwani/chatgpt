'use client';
import React from 'react'
import gptlogo from '../../public/assests/gptlogo.svg'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import recap from '../../public/assests/recatcha.svg'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import or from '../../public/assests/or.svg'
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import { useRouter } from 'next/navigation'


const Authentication = () => {
    const router = useRouter();
    return (
        <div>
            <div className='flex items-center justify-center mt-[33px]'>
                <Image src={gptlogo} alt='gpt'></Image>
            </div>
            <div className='flex items-center justify-center text-3xl mt-[60px] font-bold text-center '>Welcome back</div>
            <div className="flex flex-col max-w-sm gap-1.5 align-middle ml-[560px] mt-[20px] w-full">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="flex flex-col max-w-sm gap-1.5 align-middle ml-[560px] mt-[20px] w-full">
                <Label htmlFor="email">Password</Label>
                <Input type="password" id="password" placeholder="******" />
            </div>

            <div className='flex flex-row ml-[560px] mt-[20px] h-[79px] border border-grey max-w-sm w-full'>
                <div className="flex items-center space-x-6 pl-4">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms"></Label>
                </div>
                <div className='flex text-sm items-center'>I'm not a robot</div>
                <div className='flex items-center ml-[180px]'>
                    <Image src={recap} alt='recap'></Image>

                </div>
            </div>
            <div className='flex items-center justify-center mt-6 mr-5'>

                <Button onClick={() => {router.push('/chatgpt')}}   className='bg-[#0FA47F] text-white text-lg w-[380px] h-[50px] '>Continue</Button>
            </div>

            <div className='flex items-center justify-center w-[380px] h-[27px] text-sm ml-[560px] mt-5'>
                Don't have an account?
                <Link href={'/'} className='text-[#0FA47F] text-sm ml-2'> Sign Up</Link>
            </div>

            <div className='flex items-center justify-center w-[320px] h-[27px] text-sm ml-[600px] mt-3'>
                <Image src={or} alt='or'></Image>
            </div>

            <div className='w-[380px] h-[48px] flex items-center ml-[560px] mt-5 border border-[#C3C8CF] rounded'>
                <FcGoogle className='ml-[27px]'/>
                <div className='text-sm pl-[35px]'>Continue with Google</div>

            </div>

            <div className='w-[380px] h-[48px] flex items-center ml-[560px] mt-5 border border-[#C3C8CF] rounded'>
                <SiMicrosoft className='ml-[27px]'/>
                <div className='text-sm pl-[35px]'>Continue with Microsoft</div>

            </div>



        </div>
    )
}

export default Authentication
