import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cost, CostSchema } from '../schemas/costs.schema';
import { CostsService } from './costs.service';
import { AuthModule } from '../auth/auth.module';
import { CostsController } from './costs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostSchema }]),
    AuthModule,
  ],
  controllers: [CostsController],
  providers: [CostsService],
})
export class CostsModule {}
