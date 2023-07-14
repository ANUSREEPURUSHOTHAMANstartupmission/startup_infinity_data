<script>

  var loading;

  function onSubmit(e) {

    loading.classList.remove('hidden');

    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    
    var url = "https://script.google.com/macros/s/AKfycbz7jYGXHCT2XbXme9fsDFVhKDr3sRaSLtMafRef9wPbaRSmkHsrWe5Rjojhg6Lr4XgyWA/exec";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

          loading.classList.add('hidden');

          e.target.reset();
          
          alert('Application Successfull');

        }
    };

    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);

  }

</script>

<div class="p-5 shadow-md">

  <div bind:this={loading} class="fixed hidden top-0 left-0 bottom-0 right-0 z-20 bg-white/30 backdrop-blur-sm flex items-center justify-center">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
        
  <form on:submit|preventDefault={onSubmit}>

    <div class="grid md:grid-cols-3 gap-5 mb-5">
      <label class="block">
        <span class="text-gray-700">Name of Founder</span>
        <input type="text" name="name" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="">
      </label>

      <label class="block">
        <span class="text-gray-700">Email</span>
        <input type="email" name="email" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="">
      </label>

      <label class="block">
        <span class="text-gray-700">Phone Number</span>
        <input type="number" name="phone" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="">
      </label>

      <label class="block">
        <span class="text-gray-700">City</span>
        <input type="text" name="city" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="">
      </label>

      <label class="block">
        <span class="text-gray-700">Startup Stage</span>
        <select required name="stage" class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
          <option value="" readonly="">--select--</option>
          <option value="Concept Stage">Concept Stage</option>              
          <option value="Idea Stage">Idea Stage</option>              
          <option value="Prototyping Stage">Prototyping Stage</option>              
          <option value="Minimum Viable Product">Minimum Viable Product</option>              
          <option value="Pre Commercialisation">Pre Commercialisation</option>    
        </select>
      </label> 

    </div>

    <div class="grid md:grid-cols-2 gap-5 mb-5">

      <label class="block">
        <span class="text-gray-700">Description about your product ?</span>
        <textarea name="description" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">What is The pain point that you are solving using your product ?</span>
        <textarea name="pain-point" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">What are the innovations in your product ?</span>
        <textarea name="innovation" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">What is your revenue model ?</span>
        <textarea name="revenue-model" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">Who are your competitors/ potential competitors and how is your product different ?</span>
        <textarea name="competitiors" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>
      
      <label class="block">
        <span class="text-gray-700">Technologies used to develop this product ?</span>
        <textarea name="technology-used" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">Who is your customer ?</span>
        <textarea name="customer" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
      </label>

      <label class="block">
        <span class="text-gray-700">Pitch Deck</span>
        <input type="url" name="pitch" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="Google Drive/Dropbox/Onedrive Link">
      </label>
    
    </div>

    <div class="grid md:grid-cols-3 gap-5 mb-5">

      <label class="block">
        <span class="text-gray-700">Do you have any other office space?</span>
        <select required name="existing-office" class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
          <option value="" readonly="">--select--</option>
          <option value="Yes">Yes</option>              
          <option value="No">No</option>              
        </select>
      </label>

      <label class="block">
        <span class="text-gray-700">Do you have registered intellectual property related to this Startup ?</span>
        <select required name="intellectual-property" class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
          <option value="" readonly="">--select--</option>
          <option value="Yes">Yes</option>              
          <option value="No">No</option>              
        </select>
      </label>

      <label class="block">
        <span class="text-gray-700">How much space you requires (in Sq.Ft/ No. of seats)</span>
        <input type="text" name="space-requirement" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required placeholder="">
      </label>

    </div>

    <div class="text-right">
      <button type="submit" class="px-5 py-2 bg-blue-500 text-white rounded-md shadow-md">Submit</button>
    </div>
    
  </form>

</div>
