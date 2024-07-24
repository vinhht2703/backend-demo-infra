import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule], // Add the HealthModule to the imports array
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
