package com.quwb.web.client;

import com.quwb.web.client.hytrix.UserServicesClientHytrix;
import org.springframework.cloud.netflix.feign.FeignClient;

@FeignClient(value = "MICROSERVICE-PROVIDER", fallback = UserServicesClientHytrix.class)
public interface IUserServicesClient {
}
