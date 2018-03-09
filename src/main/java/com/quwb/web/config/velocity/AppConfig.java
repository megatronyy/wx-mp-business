package com.quwb.web.config.velocity;

import java.util.concurrent.Executor;

import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
 @EnableAsync
 public class AppConfig implements AsyncConfigurer {

	@Override
	public Executor getAsyncExecutor() {
		ThreadPoolTaskExecutor threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
	    threadPoolTaskExecutor.setCorePoolSize(10);
	    threadPoolTaskExecutor.setMaxPoolSize(10);
	    threadPoolTaskExecutor.setQueueCapacity(Integer.MAX_VALUE);
	    threadPoolTaskExecutor.setThreadNamePrefix("QCDQ-");
	    threadPoolTaskExecutor.initialize();
	    return threadPoolTaskExecutor;
	}

	@Override
	public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
		 return new SimpleAsyncUncaughtExceptionHandler();
	}

   
 }