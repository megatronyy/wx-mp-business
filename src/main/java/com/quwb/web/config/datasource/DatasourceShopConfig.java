package com.quwb.web.config.datasource;

import com.quwb.web.mybatis.MybatisProperties;
import com.quwb.web.mybatis.SqlInterceptor;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import java.lang.invoke.MethodHandles;

/**
 * Created by wenyanwu on 2017/4/12.
 */

@Configuration
@MapperScan(basePackages = "com.quwb.web.mapper",
        annotationClass = DatasourceShop.class,
        sqlSessionFactoryRef = DatasourceShopConfig.SQL_SESSION_FACTORY_NAME)
public class DatasourceShopConfig {
    public static final String SQL_SESSION_FACTORY_NAME = "sessionFactoryShop";
    public static final String TX_MANAGER = "txManagerShop";
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    @Autowired
    private MybatisProperties properties;

    @Autowired(required = false)
    private Interceptor[] interceptors = new Interceptor[]{new SqlInterceptor()};

    @Bean(name = "datasourceshop")
    @ConfigurationProperties(prefix = "spring.datasource")
    @Primary
    public DataSource datasourceShop() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = TX_MANAGER)
    @Primary
    public PlatformTransactionManager txManagerUser() {
        return new DataSourceTransactionManager(datasourceShop());
    }

    @Bean(name = DatasourceShopConfig.SQL_SESSION_FACTORY_NAME)
    @Primary
    public SqlSessionFactory sqlSessionFactoryBean() throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(datasourceShop());
        sqlSessionFactoryBean.setTypeAliasesPackage(this.properties.getTypeAliasesPackage());
        sqlSessionFactoryBean.setMapperLocations(this.properties.getMapperLocations());
        return sqlSessionFactoryBean.getObject();
    }

}
