import { IsString, IsArray, IsNotEmpty } from 'class-validator';
export class CreatePromptDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    body: string;

    @IsArray()
    @IsString({ each: true })
    tags: string[];

    @IsString()
    authorId: string; // Assuming this is a reference to the user who created the prompt
}
