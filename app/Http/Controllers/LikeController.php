<?php

namespace App\Http\Controllers;

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
        if(Like::where('reply_id', $reply->id)->where('user_id', 1)->count() > 0){ //auth()->user()->id
            return response('Exists', Response::HTTP_FORBIDDEN);
        }
        $reply->likes()->create([
            // 'user_id' => auth()->user()->id,
            'user_id' => 1,
        ]);
    }

    public function UnLikeIt(Reply $reply){
        // $reply->likes()->where('user_id', auth()->user()->id)->first()->delete();
        $reply->likes()->where('user_id', 1)->first()->delete();
    }
}
