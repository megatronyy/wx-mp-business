package com.quwb.web.client;

import com.quwb.web.client.hytrix.ShopServicesClientHytrix;
import org.springframework.cloud.netflix.feign.FeignClient;

@FeignClient(value = "MICROSERVICE-PROVIDER", fallback = ShopServicesClientHytrix.class)
public interface IShopServicesClient {
}
