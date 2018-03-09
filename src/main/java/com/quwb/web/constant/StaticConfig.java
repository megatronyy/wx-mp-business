package com.quwb.web.constant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class StaticConfig {
    private static final Logger logger = LoggerFactory.getLogger(StaticConfig.class);
    // 加载静态配置变量
    private static final Map<String, Object> CONFIGS = loadConfig();

    private StaticConfig() {
    }

    private static Map<String, Object> loadConfig() {
        Map<String, Object> configs = new HashMap<>();
        try {
            InputStream is = StaticConfig.class.getResourceAsStream("/constant.xml");
            DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            Document doc = db.parse(new InputSource(is));

            // 初始化静态配置变量
            NodeList nodeList = doc.getElementsByTagName("constant");
            for (int i = 0; i < nodeList.getLength(); i++) {
                Node node = nodeList.item(i);
                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element element = (Element) node;
                    String value = element.getAttribute("value");
                    String type = element.getAttribute("type");
                    switch (type) {
                        case "int":
                            configs.put(element.getAttribute("name"), Integer.parseInt(value));
                            break;
                        case "array":
                            configs.put(element.getAttribute("name"), value.split("\\s*,\\s*"));
                            break;
                        case "string":
                        default:
                            configs.put(element.getAttribute("name"), value);
                    }
                }
            }
        } catch (Exception e) {
            logger.info("Error occurs in parsing application.xml");
            logger.debug(e.getMessage(), e);
        }
        return configs;
    }


    public static Map<String, Object> getConfigs() {
        return CONFIGS;
    }

    public static String getConfig(String key) {
        if(CONFIGS.containsKey(key)){
            return (String) CONFIGS.get(key);
        }
        return null;
    }

    public static int getIntConfig(String key) {
        if(CONFIGS.containsKey(key)){
            return (Integer) CONFIGS.get(key);
        }
        return -1;
    }

    public static String[] getArrayConfig(String key) {
        if(CONFIGS.containsKey(key)){
            return (String[]) CONFIGS.get(key);
        }
        return null;
    }

    public static boolean inDevelopment() {
        return getIntConfig("in_development") == 1;
    }
}
