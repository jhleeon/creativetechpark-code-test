<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\DeleteProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Http\Resources\Product\DeleteProductResource;
use App\Http\Resources\Product\ProductCollection;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\ViewProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        //Todo:
        // Get all products with category and features


        // return new ProductCollection();
    }

    public function create(Request $request)
    {
        //TODO:
        //data validation
        // product modal inital
        // data get
        // image get
        // data & image prepare
        // catgory modal inital
        // attach category with product
        // feature modal initial
        // call feature relation and add featres with modal
        //product save




        return response()->json(['message' => 'Product created.']);
    }

    public function view(Request $request)
    {
        $product = Product::findOrFail(1);
        return new ProductResource($product);
    }

    public function Update(UpdateProductRequest $request)
    {
        //Todo::
        // find products
        // get all catgories & features with this product
        
        
        return response()->json(['message' => 'Product updated.']);
    }

    public function Delete(DeleteProductRequest $request)
    {
        //TODO:
        // get product id
        // when delete product get all features using relationship
        // delete image also
        // delete features then products 

        return response()->json(['message' => 'Category created.'], 201);
    }
}
