import { Priority } from '../../types/Priority'
import { Status } from '../../types/Status'

export interface Comment {
  _id: string
  content: string
  sender: string
  date: string
  isPublic: boolean
}

export interface TicketValues {
  _id: string
  title: string
  description: string
  requesterId: string
  assignedId: string
  priority: Priority
  status: Status
  fillingDate: string
  finishDate: string
  tags: string[]
  comments: Comment[]
}

export interface CreateTicketValues {
  title: string
  description: string
  priority: string
  tags: string[]
}

export interface TicketStatus {
  status: string
}

export interface AddCommentValues {
  content: string
  sender: string
  date: string
  isPublic: boolean
}