import { PartialType } from '@nestjs/mapped-types';
import { CreatePromptDto } from './create-prompt.dto';

export class UpdatePromptDto extends PartialType(CreatePromptDto) {
    title?: string | undefined;
    body?: string | undefined;
    tags?: string[] | undefined;
}
