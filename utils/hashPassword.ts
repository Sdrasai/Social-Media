import bc from "bcrypt"

export class Hash {
  public async hashingPassword(password: string) {
    const salt = await bc.genSalt(10)
    const hashedPassword = await bc.hash(password, salt)
    return hashedPassword
  }
  public async comparingPassword(password: string, checkedPassword: string) {
    const verified = await bc.compare(password, checkedPassword)
    return verified
  }
}
