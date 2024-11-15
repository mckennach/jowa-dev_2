'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Image from 'next/image'
import CustomIcons from '../../../custom-icons'
import { Container } from '../../../craft'
import { cn, imageLoader } from '@/src/lib/utils'
import { Project } from '@/src/gql/graphql'
import { useLocalStorage } from 'usehooks-ts'
import { createCookie, deleteCookie } from '@/src/lib/api/actions'

gsap.registerPlugin(ScrollTrigger)

interface LoadingProps {
  project: Project
}

export default function Loading({ project }: LoadingProps) {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [modifiedDate, setModifiedDate, removeDate] = useLocalStorage(
    'loading-date',
    false
  )
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const logoRef = useRef(null)
  const logoTextRef = useRef(null)

  useGSAP(
    () => {
      if (containerRef.current === null) return

      gsap.set(logoTextRef.current, {
        opacity: 0,
      })

      gsap.set(textRef.current, {
        opacity: 0,
      })

      gsap.set(containerRef.current, {
        alhpa: 1,
        backgroundColor: 'hsla(70, 14%, 67%, 1)',
      })

      const animation = () => {
        const tl = gsap.timeline({
          onComplete: () => {
            setTimeout(() => {
              setHasLoaded(true)
              createCookie('animation-loaded', 'true')
            }, 100)
          },
        })

        tl.to(textRef.current, {
          opacity: 1,
          duration: 3,
          stagger: 0.25,
        })

        tl.to(
          containerRef.current,
          {
            backgroundColor: 'hsla(70, 14%, 67%, 0)',
            duration: 3,
            stagger: 0.25,
          },
          '<+=0.5'
        )

        tl.to(logoRef.current, {
          opacity: 0,
          stagger: 0.25,
        })

        tl.to(textRef.current, {
          opacity: 0,
        })

        tl.to(
          logoTextRef.current,
          {
            opacity: 1,
            stagger: 0.25,
          },
          '<+=0.25'
        )

        tl.to(containerRef.current, {
          opacity: 0,
          duration: 1.8,
        })
      }
      setTimeout(animation, 200)
    },
    {
      scope: containerRef,
      revertOnUpdate: true,
    }
  )

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-[999] h-screen w-screen bg-background transition-all duration-300 ease-linear',
        hasLoaded
          ? 'pointer-events-none opacity-0'
          : 'pointer-events-auto opacity-100'
      )}
    >
      <Container
        className="relative z-10 flex h-full w-full items-center justify-between bg-background"
        ref={containerRef}
      >
        <div className="absolute left-12 top-8 opacity-0" ref={logoTextRef}>
          <CustomIcons name="logo-text" color="hsla(39, 78%, 93%, 1)" />
        </div>
        <div className="basis-1/2" ref={logoRef}>
          <CustomIcons
            name="logo"
            className="w-[381px] text-cream"
            color="hsla(39, 78%, 93%, 1)"
          />
        </div>
        <div className="basis-1/2 opacity-0" ref={textRef}>
          <p className="font-maisonNeue text-[32px] text-cream">
            Where your vision unfolds.
          </p>
        </div>
      </Container>
      <div
        className="absolute left-0 right-0 top-0 z-0 mx-auto h-screen w-screen"
        ref={imageRef}
      >
        <Image
          src={project?.projectFields?.featuredImage?.node?.sourceUrl ?? ''}
          alt="alt"
          fill={true}
          priority={true}
          style={{
            objectFit: 'cover',
          }}
          loader={imageLoader}
        />
      </div>
    </div>
  )
}
