import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from "class-validator"

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email!: string

  @IsString()
  @IsNotEmpty()
  public username!: string

  @MinLength(4, {
    message:
      "Password is too short. Minimal length is $constraint1 characters, but actual is $value",
  })
  @IsNotEmpty()
  @IsString()
  public password!: string
}

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email!: string

  @IsString()
  @IsNotEmpty()
  public username!: string

  @MinLength(4, {
    message:
      "New Password is too short. Minimal length is $constraint1 characters, but actual is $value",
  })
  @IsNotEmpty()
  @IsString()
  public password!: string
}
