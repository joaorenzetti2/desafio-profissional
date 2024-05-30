import { Controller, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/products-nest'),
  ProductModule,
], 
  controllers: [],
  providers: [],
})

export class AppModule{}