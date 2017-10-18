$.fn.tabify = function()
{
    return this.each(init);

    function init()
    {
        const $this = $(this);
        
        // Get tabs and panes.
        $this.data('tabs',  $this.find('.tabs__tab'));
        $this.data('panes', $this.find('.tabs__pane'));
        
        // Attach events.
        $this.data('tabs').on('click', {parent: $this}, onTabClick);
        
        // Active first tab.
        $this.data('tabs').first().click();
    }
    
    function onTabClick(event)
    {
        var $this = $(this);
        
        // Abort if already active.
        if ($this.hasClass('active')) {return;}
        
        // Set active tab.
        event.data.parent.data('tabs').removeClass('active');
        $this.addClass('active');

        // Show pane.
        event.data.parent.data('panes').hide();
        event.data.parent.data('panes')
            .eq( event.data.parent.data('tabs').index($this) )
            .fadeIn();
    }
}