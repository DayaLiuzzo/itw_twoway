export class Prompt {
    id: string;
    title: string;
    body: string;
    tags: string[];
    authorId: string; // Reference to the user who created the prompt
    createdAt: Date;
    updatedAt: Date;
}
