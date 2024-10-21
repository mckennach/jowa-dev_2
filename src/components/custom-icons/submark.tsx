import { cn } from '@/src/lib/utils'
import { type Icon } from '.'

export const Submark = ({
  color = 'currentColor',
  className,
  ...props
}: Icon) => {
  return (
    <svg
      width="54"
      height="26"
      viewBox="0 0 54 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-foreground', className)}
      {...props}
    >
      <g clipPath="url(#clip0_117_273)">
        <path
          d="M29.1486 12.7582C28.7944 14.9747 28.93 17.3483 31.4217 18.1337C32.346 18.4254 34.2223 18.1212 34.8427 18.9615C35.2295 19.49 35.0009 20.1857 35.1667 20.7815C35.2973 21.2578 35.5962 21.6218 35.9805 21.926C36.8998 22.6565 38.1456 22.9756 39.2483 23.3072C40.7227 23.7486 42.2272 24.1076 43.7443 24.3744C46.8036 24.9129 49.9182 25.085 53.0202 24.9154C53.3769 24.8955 54.1002 24.8331 53.9897 24.337C53.8918 23.8932 52.6912 23.8358 52.3923 23.8508C49.7574 23.9954 47.1226 23.8682 44.523 23.412C43.1465 23.1701 41.7902 22.846 40.4539 22.4396C39.4794 22.1404 38.0376 21.8711 37.7739 20.7267C37.5579 19.7743 37.7865 19.0462 36.9124 18.3656C36.2141 17.822 35.2546 17.5976 34.3931 17.4904C33.2226 17.3458 32.228 17.3882 31.7934 16.0942C31.4644 15.1018 31.6277 13.9574 31.7884 12.9501C31.8964 12.2595 29.2691 11.9753 29.1461 12.7557"
          fill={color}
        />
        <path
          d="M2.01368 25.9927C5.10564 25.4791 8.28802 25.0054 11.1866 23.7712C13.9922 22.5769 16.7124 20.8192 19.0785 18.9143C24.6269 14.4438 29.6655 7.85658 31.803 1.03494C32.024 0.334326 29.4897 -0.433606 29.2611 0.29194C27.1788 6.94652 22.3613 13.2446 17.0138 17.6776C14.7482 19.5551 12.1159 21.3029 9.41328 22.5021C6.58003 23.7613 3.47049 24.2474 0.428767 24.7536C-0.93511 24.9805 1.33048 26.1049 2.01368 25.9927Z"
          fill={color}
        />
        <path
          d="M41.6857 12.0102C40.7865 12.0102 39.925 11.691 39.2418 11.0951C38.4933 10.4469 38.0462 9.5468 37.9809 8.56195C37.9156 7.57959 38.2396 6.62965 38.8927 5.88665C39.5457 5.14365 40.4525 4.69985 41.4446 4.63502C42.4292 4.5702 43.3912 4.89183 44.1397 5.54009C44.8882 6.18834 45.3353 7.08842 45.4006 8.07327C45.4659 9.05562 45.1419 10.0056 44.4863 10.7486C43.8333 11.4916 42.9265 11.9354 41.9344 12.0002C41.8515 12.0052 41.7661 12.0077 41.6832 12.0077L41.6857 12.0102ZM41.6933 6.12601C41.643 6.12601 41.5928 6.12601 41.5451 6.13099C40.9548 6.17089 40.4173 6.43268 40.028 6.87399C39.6387 7.31531 39.4453 7.87879 39.4854 8.46471C39.5256 9.05063 39.7894 9.5842 40.2339 9.97066C40.6785 10.3571 41.2487 10.5516 41.8364 10.5092C42.4267 10.4693 42.9642 10.2075 43.3535 9.76621C43.7429 9.32489 43.9363 8.76141 43.8961 8.17549C43.8559 7.58957 43.5921 7.056 43.1476 6.66954C42.7407 6.3155 42.2308 6.12601 41.6933 6.12601Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_117_273">
          <rect width="54" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
