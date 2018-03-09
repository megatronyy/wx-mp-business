package com.quwb.web.config.velocity;

import org.springframework.boot.autoconfigure.velocity.VelocityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by congzhou on 8/8/2016.
 */
@Configuration
public class VelocityConfig {

    @Bean(name="velocityViewResolver")
    public EmbeddedVelocityLayoutViewResolver velocityViewResolver(VelocityProperties properties) {
        EmbeddedVelocityLayoutViewResolver viewResolver = new EmbeddedVelocityLayoutViewResolver();
        viewResolver.setViewClass(EmbeddedVelocityLayoutView.class);
        properties.applyToViewResolver(viewResolver);
        viewResolver.setLayoutUrl("layout/layout.vm");
        return viewResolver;
    }

}
