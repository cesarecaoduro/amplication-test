/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class ProjectCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  projectRole?: UserCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutProjectsInput;
}
export { ProjectCreateInput };
