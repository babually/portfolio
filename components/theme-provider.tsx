"use client"

import { ThemeProviderProps } from "next-themes/dist/types"
import * as React from "react"


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}