<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Exception;

class AuthController extends Controller
{
    use HttpResponses;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function login_user(LoginUserRequest $request)
    {
 
        try{
            $credentials = array('username' => $request->username, 'password' => $request->password);
            if(!Auth::attempt($credentials, false)) {
                return $this->error('', 'Credentials do not match', 401);
            }
            $user = User::where('username', $request->username)->first();
            $user['avatar'] = null;
         
            //response
            return $this->success([
                'user' => $user,
                'token'=> $user->createToken('API Token of '. $user->name)->plainTextToken
            ]);
        }catch(Exception $e){
            
            return $this->error(
                [],
                $e->getMessage(),
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function register(StoreUserRequest $request) {
        try{
            $request->validated();
      
            // Retrieve a portion of the validated input data...
            $validated = $request->safe()->only(['name', 'email']);
           
            $user = User::create([
                'name'      =>$request->name,
                'email'     => $request->email,
                'role'      => $request->role,
                'password'  => Hash::make($request->password)
            ]);
            return $this->success([
                'user' => $user,
                'token'=> $user->createToken('API Token of '. $user->name)->plainTextToken
            ]);
    
        }catch(Exception $e){
            return $this->error(
                [],
                $e->getMessage(),
                 Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }
    }

    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function logout() : string {
        return response()->json('this is my logout method');
    }
}
