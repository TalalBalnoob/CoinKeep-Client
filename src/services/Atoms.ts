import { atom } from 'jotai'
import type { UserAccount } from '../types'

export const Account = atom<UserAccount | null>(null)
