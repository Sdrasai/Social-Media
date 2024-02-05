interface IUser {
  username: string
  password: string
  email: string
  followers?: number
  following?: number
  // followRequest?: [string]
  post?: []
  savedPost?: []
}

export default IUser
