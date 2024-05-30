import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model <Product>) {}
  
  create (createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.find();
  }

  findById(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, UpdateProductDto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, {
      name: UpdateProductDto.name,
      price: UpdateProductDto.price,
      quant: UpdateProductDto.quant,
      marca: UpdateProductDto.marca
    });
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}

