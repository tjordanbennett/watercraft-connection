import type React from "react"

interface WaveLineIconProps {
  className?: string
}

export const WaveLineIcon: React.FC<WaveLineIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M54.1283 283.001C52.8319 269.74 61.6674 256.236 66.8345 244.212C101.013 164.722 175.226 108.737 272.532 113.255C369.839 117.773 347.821 179.071 332.874 185.404C316.115 192.505 311.264 167.423 297.932 172.739C288.462 176.515 297.063 191.448 275.696 194.111C267.743 195.105 262.071 180.79 253.46 179.071C246.965 177.779 243.466 190.944 235.196 190.944C228.342 190.944 226.77 180.144 220.104 177.491C214.951 175.433 210.584 191.737 202.636 193.323C192.462 195.348 185.132 161.883 163.038 191.242"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M248.772 191.721C201.419 236.2 219.137 281.053 309.587 287.981"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

