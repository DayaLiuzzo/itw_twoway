import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PromptModule } from './prompt/prompt.module';

@Module({
  imports: [UserModule, PromptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
