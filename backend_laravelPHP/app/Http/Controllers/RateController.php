<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rate;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

class RateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            // $collection = Rate::all();

            // return response()->json([
            //     'details' => $collection,
            //     'success' => true,
            //     'status' => 201,
            //     'message' => 'Fetch all Rates have been successful!',
            // ], 201);
            
                $data = Rate::all();
        
                return response($data, 201);
            

        }catch(\Exception $error){

            return response()->json([
                'success' => false,
                'status' => 401,
                'message' => 'Fetch all Rates has been unsuccessful!',
                'error' => $error,
            ], 401);
            
        };
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'rate_name' => 'required|string',
                'rate_amount_per_day' => 'required|integer',
                'rate_details' => 'required|string',
                'rate_description' => 'required|string',
                'rate_status_id' => 'required|integer',
                'rate_department_id' => 'required|string',
            ]);

            $rates = Rate::create([
                'rate_name' => $data['rate_name'],
                'rate_amount_per_day' => $data['rate_amount_per_day'],
                'rate_details' => $data['rate_details'],
                'rate_description' => $data['rate_description'],
                'rate_status_id' => $data['rate_status_id'],
                'rate_department_id' => $data['rate_department_id'],
                'created_by' => auth()->id(),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            $response_data = [
                'status' => 201,
                'success' => true,
                'message' => 'Rate has successfully created!',
                'details' => $rates,
            ];

            return response($response_data, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'status' => 422,
                'errors' => $e->errors(),
            ], 422);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Rate not found',
                'status' => 404,
            ], 404);
        } catch (\Exception $error) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred',
                'status' => 500,
                'errors' => $error->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            // Validate the incoming request data
            $data = $request->validate([
                'rate_name' => 'required|string',
                'rate_amount_per_day' => 'required|integer',
                'rate_details' => 'required|string',
                'rate_description' => 'required|string',
                'rate_status_id' => 'required|integer',
                'rate_department_id' => 'required|string',
            ]);

            // Find the rate by ID
            $rate = Rate::find($id);

            // Check if the rate exists
            if (!$rate) {
                return response()->json([
                    'success' => false,
                    'message' => 'Rate not found',
                    'status' => 404,
                ], 404);
            }

            // Update the rate with the validated data
            $rate->update($data);

            // Return the updated rate data
            return response()->json([
                'data' => $rate,
                'success' => true,
                'status' => 200,
            ], 200);

        } catch (ValidationException $e) {
            // Handle validation errors
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'status' => 422,
                'errors' => $e->errors(),
            ], 422);

        } catch (ModelNotFoundException $e) {
            // Handle model not found error
            return response()->json([
                'success' => false,
                'message' => 'Rate not found',
                'status' => 404,
            ], 404);
            
        } catch (\Exception $error) {
            // Handle other exceptions
            return response()->json([
                'success' => false,
                'message' => 'An error occurred',
                'status' => 500,
                'errors' => $error->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deactivate(string $id)
    {
        try {
            // Find the rate by ID and ensure it meets the additional condition(s)
            $rate = Rate::where('id', $id)
                        ->where('rate_status_id', 1) // Example condition
                        ->firstOrFail();
        
            // Update the rate status
            $rate->update(['rate_status_id' => 0]);
        
            // Return the updated rate data
            return response()->json([
                'details' => $rate,
                'success' => true,
                'status' => 200,
                'message' => 'Rate has been successfully deactivated!'
            ], 200);

        } catch (ModelNotFoundException $e) {
            // Handle model not found error
            return response()->json([
                'success' => false,
                'message' => 'Rate not found or condition not met',
                'status' => 404,
            ], 404);
        } catch (\Exception $error) {
            // Handle other exceptions
            return response()->json([
                'success' => false,
                'message' => 'An error occurred',
                'status' => 500,
                'errors' => $error->getMessage(),
            ], 500);
        }
        
    }

    public function search(Request $request)
    {
        //EVALIDATE NA TAAS PANG GIINPUT OR GAMAY!
        $validator = Validator::make($request->all(), [
            'data' => 'required|string|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid search input.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $data = $request->input('data');

            $rates = Rate::where('id', 'like', '%' . $data . '%')
                ->orWhere('rate_name', 'like', '%' . $data . '%')
                ->orWhere('rate_amount_per_day', 'like', '%' . $data . '%')
                ->orWhere('rate_details', 'like', '%' . $data . '%')
                ->orWhere('rate_description', 'like', '%' . $data . '%')
                ->get();

            if ($rates->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'No rates found for the given search criteria.',
                ], 404);
            }

            return response()->json([
                'success' => true,
                'status' => 200,
                'message' => 'Rate found!',
                'data' => $rates,
            ], 200);

        } catch (\Exception $e) {
            // Log the error for further analysis
            \Log::error('Error in search method: ' . $e->getMessage(), ['exception' => $e]);

            // Return a more detailed error message only if in debug mode
            $errorMessage = config('app.debug') ? $e->getMessage() : 'Failed to search deduction. Please try again later.';

            return response()->json([
                'success' => false,
                'message' => $errorMessage,
            ], 500);
        }
    }


}
