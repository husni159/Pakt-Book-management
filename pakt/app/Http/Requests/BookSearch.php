<?php
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use App\Traits\HttpResponses;

class BookSearch extends FormRequest
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
    public function rules(): array
    {
        return [
            'page' => 'integer|min:1',
            'perpage' => 'integer|min:1|max:100',
            'title' => 'string',
            'author' => 'string',
            'publication_date' => 'date',
            'isbn' => 'string',
            'genre' => 'string',
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
