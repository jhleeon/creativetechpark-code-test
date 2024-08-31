<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\DeleteCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Http\Requests\Category\CreateCtegoryRequest;
use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Category\CategoryResource;
use App\Http\Resources\Category\ViewCategoryResource;
use App\Models\Category;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        $categories = Category::all();

        return CategoryResource::collection($categories);
    }

    public function create(CreateCtegoryRequest $request)
    {
        $validated = $request->validated();

        $category = new Category();
        $category->name = $validated['name'];
        $category->save();

        return response()->json(['message' => 'Category created.']);
    }

    public function view(Request $request)
    {
        $category = Category::findOrFail(1);
        // return new  ViewCategoryResource($category);
    }

    public function Update(UpdateCategoryRequest $request)
    {
        $validated = $request->validated();

        return response()->json(['message' => 'Category created.'], 201);
    }

    public function Delete(DeleteCategoryRequest $request)
    {
        $validated = $request->validated();
        $category = Category::find($validated['id']);

        //TODO:
        // when delete catgories find related products with this
        // when products get with relationship also find it has any fetaures
        // if has then get and delete everything at the last
        // when products delte also delte the image from project.

        if ($category) {
            $category->delete();
        } else {
            throw ValidationException::withMessages(['message' => 'Category not found!']);
        }

        return response()->json(['message' => 'Category deleted.']);
    }
}
