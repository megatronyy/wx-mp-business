package com.quwb.web.common;


import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.*;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

/**
 * redis 读写操作
 * Created by seven on 2017/1/16.
 */
@Service
public class WebRedis {
    private static Logger log = Logger.getLogger(WebRedis.class);
    @Autowired
    RedisTemplate<Object,Object>  redisTemplate;
    @Resource(name = "redisTemplate")
    ValueOperations<String, String> valueOpsStr;
    @Resource(name = "redisTemplate")
    ValueOperations<String, Object> valueOps;
    @Resource(name = "redisTemplate")
    public HashOperations hashOperations;
    @Resource(name = "redisTemplate")
    private ListOperations listOps;
    @Resource(name = "redisTemplate")
    private SetOperations  setOps;
    @Resource(name = "redisTemplate")
    private ZSetOperations zSetOps;

    /**
     * 存数据
     * @param key
     * @param value
     */
    @HystrixCommand
    public void set( String key, Object value) {
        try {
            valueOps.set(key,value);
        } catch (Exception e) {
            log.error(e.getMessage());
        }finally {

        }

    }

    /**
     * 存数据存数据
     * @param key
     * @param value
     * @param liveTime
     */
    @HystrixCommand
    public void set( String key, Object value,  long  liveTime) {
        try {
            valueOps.set(key,value,liveTime);
        } catch (Exception e) {
            log.error(e.getMessage());
        }finally {

        }

    }


    /**
     * 获取数据
     * @param key
     */
    @HystrixCommand
    public Object get(String  key) {
        try {
            return  valueOps.get(key);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }

    }

    /**
     *    删数据
     */
    @HystrixCommand
    public long del(final String...keys) {
        return (long)redisTemplate.execute(new RedisCallback() {
            @Override
            public Long doInRedis(RedisConnection connection)
                    throws DataAccessException {
                long result = 0;
                for (int i = 0; i < keys.length; i++) {
                    result = connection.del(keys[i].getBytes());
                }
                return result;
            }
        });
    }
    @HystrixCommand
    public  Object hget(String key, String field){
        try {
            return  hashOperations.get(key ,field);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }


    }
    @HystrixCommand
    public  void hset(String key, String field, String value){
        try {
            hashOperations.put(key, field, value);
        } catch (Exception e) {
            log.error(e.getMessage());
        }finally {

        }


    }

    @HystrixCommand
    public  Long sadd(Object key, Object value){

        try {
            return   setOps.add(key, value);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }
    }

    @HystrixCommand
    public  Long sadd(Object key, Object... value ){
        try {
            return   setOps.add(key, value);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }
    }


    @HystrixCommand
    public Set members(Object key1){
        try {
            return   setOps.members(key1);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }

    }

    @HystrixCommand
    public  Long smemberscount(Object key ){
        return   setOps.size(key);
    }


    @HystrixCommand
    public Boolean expires(String key, Long miniseconds){
        return  redisTemplate.expire(key, miniseconds, TimeUnit.MILLISECONDS);
    }
    @HystrixCommand
    public Boolean expires(String key, Integer miniseconds){
        return  redisTemplate.expire(key, miniseconds, TimeUnit.MILLISECONDS);
    }

    @HystrixCommand
    public Set intersect(String key1, String key2){
        return   setOps.intersect(key1, key2);
    }

    @HystrixCommand
    public Set intersect(String key1, String... key2){
        return   setOps.intersect(key1, key2);
    }
    @HystrixCommand
    public Set intersect(String... keys)
    {
        if(keys.length==0) {
            return null;
        } else if(keys.length==1) {
            String key1 = keys[0];
            return setOps.members(key1);
        }
        else {
            String key1 = keys[0];
            Integer i=0;
            Set otherKeys=new HashSet<>();
            for (String s:keys)
            {
                if(i>0) {
                    otherKeys.add(s);
                }
                i++;
            }
            return setOps.intersect(key1,otherKeys);
        }
    }
    @HystrixCommand
    public Long intersectAndStore(String key1, String key2,String key3){
        try {
            return   setOps.intersectAndStore(key1, key2, key3);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }

    }

    @HystrixCommand
    public Long intersectAndStore(String key1,String key2, String... key3){

        try {
            return   setOps.intersectAndStore(key1, key2, key3);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }
    }
    @HystrixCommand
    public  List multiGet(String h, List keys){

        try {
            return  hashOperations.multiGet(h, keys);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }
    }

    @HystrixCommand
    public Set union(String key1, String key2){

        try {
            return   setOps.union(key1, key2);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }
    }

    @HystrixCommand
    public Set difference(String key1, String key2){

        try {
            return   setOps.difference(key1, key2);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }finally {

        }

    }



    @HystrixCommand
    Map hgetAll(String key){
        return  hashOperations.entries(key);
    }
    @HystrixCommand
    public Boolean exists(final String key) {
        try {
            return redisTemplate.hasKey(key);
        } catch (Exception e) {
            log.error(e.getMessage());
            return false;
        }finally {

        }
    }
}
