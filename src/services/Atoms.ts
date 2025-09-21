import { atom } from 'jotai'
import type { User } from '../types'

export const UserProfile = atom<User | null>(null)
