package com.eazybytes.eazystore.service.impl;

import com.eazybytes.eazystore.dto.ProductDto;
import com.eazybytes.eazystore.entity.Product;
import com.eazybytes.eazystore.repository.ProductRepository;
import com.eazybytes.eazystore.service.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepo) {
        this.productRepository = productRepo;
    }

    @Override
    public List<ProductDto> getProducts() {
        return this.productRepository.findAll()
                .stream().map(this::getProductDto).collect(Collectors.toList());
    }

    private ProductDto getProductDto(Product product) {
        ProductDto productDto = new ProductDto();
        BeanUtils.copyProperties(product, productDto);
        return  productDto;
    }
}
