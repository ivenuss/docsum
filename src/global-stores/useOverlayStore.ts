import create from 'zustand'
import { combine } from 'zustand/middleware'

export const userOverlay = create(
  combine(
    {
      isSidebarOpen: false,
    },
    (set) => ({
      set,
    }),
  ),
)
