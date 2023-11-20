<?php
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateBookRequest extends FormRequest
{
    use HttpResponses;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(Request $request): array
    {
        
        return [
            'title' => 'string|max:255',
            'author' => 'string|max:255',
            'publication_date' => 'date',
            'isbn' => [ 'string', 'max:13', Rule::unique('books')->ignore($request->id)],
            'description' => 'nullable|string',
            'genre' => 'nullable|string',
            'image' => 'nullable|string',
            'publisher' => 'nullable|string',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */

     protected function failedValidation(Validator $validator)
     {
         throw new HttpResponseException(
             $this->error(
                 $validator->errors(),
                 'Validation failed',
                  Response::HTTP_UNPROCESSABLE_ENTITY
                 )
             );
     }
}
