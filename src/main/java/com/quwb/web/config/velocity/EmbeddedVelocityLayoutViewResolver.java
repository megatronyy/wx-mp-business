package com.quwb.web.config.velocity;

import org.springframework.boot.web.servlet.view.velocity.EmbeddedVelocityViewResolver;
import org.springframework.web.servlet.view.AbstractUrlBasedView;
import org.springframework.web.servlet.view.velocity.VelocityLayoutView;

/**
 * Created by congzhou on 8/8/2016.
 */
public class EmbeddedVelocityLayoutViewResolver extends EmbeddedVelocityViewResolver {

    private String layoutUrl;

    private String layoutKey;

    private String screenContentKey;


    /**
     * Requires VelocityLayoutView.
     * @see VelocityLayoutView
     */
    @Override
    protected Class<?> requiredViewClass() {
        return EmbeddedVelocityLayoutView.class;
    }

    /**
     * Set the layout template to use. Default is "layout.vm".
     * @param layoutUrl the template location (relative to the template
     * root directory)
     * @see VelocityLayoutView#setLayoutUrl
     */
    public void setLayoutUrl(String layoutUrl) {
        this.layoutUrl = layoutUrl;
    }

    /**
     * Set the context key used to specify an alternate layout to be used instead
     * of the default layout. Screen content templates can override the layout
     * template that they wish to be wrapped with by setting this value in the
     * template, for example:<br>
     * {@code #set($layout = "MyLayout.vm" )}
     * <p>The default key is "layout", as illustrated above.
     * @param layoutKey the name of the key you wish to use in your
     * screen content templates to override the layout template
     * @see VelocityLayoutView#setLayoutKey
     */
    public void setLayoutKey(String layoutKey) {
        this.layoutKey = layoutKey;
    }

    /**
     * Set the name of the context key that will hold the content of
     * the screen within the layout template. This key must be present
     * in the layout template for the current screen to be rendered.
     * <p>Default is "screen_content": accessed in VTL as
     * {@code $screen_content}.
     * @param screenContentKey the name of the screen content key to use
     * @see VelocityLayoutView#setScreenContentKey
     */
    public void setScreenContentKey(String screenContentKey) {
        this.screenContentKey = screenContentKey;
    }


    @Override
    protected AbstractUrlBasedView buildView(String viewName) throws Exception {
        EmbeddedVelocityLayoutView view = (EmbeddedVelocityLayoutView) super.buildView(viewName);
        // Use not-null checks to preserve VelocityLayoutView's defaults.
        if (this.layoutUrl != null) {
            view.setLayoutUrl(this.layoutUrl);
        }
        if (this.layoutKey != null) {
            view.setLayoutKey(this.layoutKey);
        }
        if (this.screenContentKey != null) {
            view.setScreenContentKey(this.screenContentKey);
        }
        return view;
    }
}
