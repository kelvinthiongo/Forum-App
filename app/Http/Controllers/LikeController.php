<?php

namespace App\Http\Controllers;

use App\Events\LikeEvent;
use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function likeIt(Reply $reply){
        if(Like::where('reply_id', $reply->id)->where('user_id', auth()->user()->id)->count() > 0){
            return response('Exists', Response::HTTP_FORBIDDEN);
        }
        $reply->likes()->create([
            'user_id' => auth()->id(),
        ]);
        broadcast(new LikeEvent($reply->id, 1))->toOthers();
    }

    public function UnLikeIt(Reply $reply){
        $reply->likes()->where('user_id', auth()->id())->first()->delete();
        broadcast(new LikeEvent($reply->id, 0))->toOthers();
    }
}
