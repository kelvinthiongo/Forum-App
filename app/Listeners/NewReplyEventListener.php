<?php

namespace App\Listeners;

use App\Events\NewReplyEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NewReplyEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewReplyEvent  $event
     * @return void
     */
    public function handle(NewReplyEvent $event)
    {
        //
    }
}
