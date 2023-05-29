"use client"
import React, { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "next-themes"

const Toggler = () => {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const light = theme === "light"
  return (
    <button className="">
      {light ? (
        <FiMoon onClick={() => setTheme("dark")} />
      ) : (
        <FiSun onClick={() => setTheme("light")} />
      )}
    </button>
  )
}

export default Toggler
