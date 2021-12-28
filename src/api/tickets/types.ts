import { Priority } from '../../types/Priority'
import { Status } from '../../types/Status'

export interface TicketValues {
  _id: string
  title: string
  description: string
  requesterId: string
  assignedId: string
  priority: Priority
  status: Status
  fillingDate: Date
  finishDate: Date
  tags: string[]
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