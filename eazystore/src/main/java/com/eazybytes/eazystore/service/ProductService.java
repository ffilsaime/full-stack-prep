package com.eazybytes.eazystore.service;

import com.eazybytes.eazystore.dto.ProductDto;


import java.util.List;

public interface ProductService {

    List<ProductDto> getProducts();
}
