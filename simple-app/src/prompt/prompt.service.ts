import { Injectable } from '@nestjs/common';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
import { Prompt } from './entities/prompt.entity';

@Injectable()
export class PromptService {

    private prompts: Prompt[] = [];
    private idcounter = 1;

  create(createPromptDto: CreatePromptDto) {
       const newPrompt: Prompt = {...createPromptDto, id: this.idcounter++, createdAt: new Date(), updatedAt: new Date() };
        this.prompts.push(newPrompt);
       return `This action returns a #${newPrompt.id} prompt`;
  }

  findAll() {
    return this.prompts
  }

  findOne(id: number) {
    return `This action returns a #${id} prompt`;
  }

  update(id: number, updatePromptDto: UpdatePromptDto) {
    return `This action updates a #${id} prompt`;
  }

  remove(id: number) {
    return `This action removes a #${id} prompt`;
  }
}
