export class CreatePromptDto {
    title: string;
    body: string;
    tags: string[];
    authorId: string; // Assuming this is a reference to the user who created the prompt
}
