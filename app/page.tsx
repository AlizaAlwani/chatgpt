import React from 'react'
import plusicon from '../public/assests/plusicon.svg'
import chaticon from '../public/assests/chaticon.svg'
import lineicon from '../public/assests/line.svg'
import trashicon from '../public/assests/trash.svg'
import newicon from '../public/assests/new.svg'
import exampleicon from '../public/assests/example.svg'
import { Input } from "@/components/ui/input"
import searchbar from '../public/assests/searchbar.svg'


import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex w-[260px] h-[740px] bg-black text-white'>
        <div className='flex flex-col'>
          <div className='flex border border-white border-opacity-20 rounded align-baseline m-[8px] w-[244px] h-[46px] text-white pl-2 items-center text-[14px]'>
            <Image src={plusicon} alt='plus' className='flex pt-2'></Image>
            New Chat </div>

          <div className='flex flex-col m-[8px] w-[244px] h-[478px] pl-1 text-white'>
            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-1 items-center text-[14px]'>
              <Image src={chaticon} alt='chat' className='flex '></Image>
              What is ChatGPT?

            </div>

            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-1 items-center text-[14px]'>
              <Image src={chaticon} alt='chat' className='flex '></Image>
              What is ChatGPT?

            </div>
            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-1 items-center text-[14px]'>
              <Image src={chaticon} alt='chat' className='flex '></Image>
              What is ChatGPT?

            </div>
            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-1 items-center text-[14px]'>
              <Image src={chaticon} alt='chat' className='flex '></Image>
              What is ChatGPT?

            </div>

          </div>

          <Image src={lineicon} alt='line' className='pl-3'></Image>
          <div className='w-[244px] h-[270px] m-[8px]'>
            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-2 items-center text-[14px]'>
              <Image src={trashicon} alt='trash' className='flex '></Image>
              Clear Conversation

            </div>

            <div className='flex m-[2px] gap-x-2 w-[244px] h-[46px] text-white pl-2 items-center text-[14px]'>
              <Image src={trashicon} alt='trash' className='flex '></Image>
              Upgrade to Plus
              <Image src={newicon} alt='new' className='ml-[30px] '></Image>

            </div>

          </div>

        </div>
      </div>


      <div className='flex flex-col w-[1440px] m-2 h-[740px]'>
        <div className='flex h-[40] mt-[160px] justify-center text-center font-semibold text-[36px]'>ChatGPT</div>
        <div className='flex flex-row items-center justify-center mt-8'>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image src={exampleicon} alt='example'></Image>

            </div>
            <div>Examples</div>
            <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Explain quantum computing in single terms”→</div>
            <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Got any creative ideas for a 10 year old’s birthday?” →</div>
            <div className='flex m-2 w-[200px] h-[64px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“How do I make an HTTP results in Javascript?” →</div>
          </div>

          <div className='flex flex-row items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <div>
                <Image src={exampleicon} alt='example'></Image>

              </div>
              <div>Examples</div>
              <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Explain quantum computing in single terms”→</div>
              <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Got any creative ideas for a 10 year old’s birthday?” →</div>
              <div className='flex m-2 w-[200px] h-[64px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“How do I make an HTTP results in Javascript?” →</div>
            </div>


            <div className='flex flex-row items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <Image src={exampleicon} alt='example'></Image>

                </div>
                <div>Examples</div>
                <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Explain quantum computing in single terms”→</div>
                <div className='flex m-2 w-[200px] h-[84px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“Got any creative ideas for a 10 year old’s birthday?” →</div>
                <div className='flex m-2 w-[200px] h-[64px] border border-grey rounded items-center justify-center bg-[#F9FAFB] text-center text-sm p-[12px]'>“How do I make an HTTP results in Javascript?” →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-24 mx-auto w-[710px] h-[50px] mb-8">
          <input className="absolute inset-0 w-full h-full pl-12 border border-black" />
          <Image src={searchbar} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>

      </div>

    </div>
  )
}

export default page
