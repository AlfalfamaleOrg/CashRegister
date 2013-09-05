<div id="ItemManager" class="Screen">
	<button class="ChangeScreen" data-screen="reload">Terug</button>
	<table>
		<tr>
			<th>Naam</th>
			<th>Verdien</th>
		</tr>
		<tr id="manage_item_dummy" class="Item">
			<td class="Name"></td>
			<td class="Profit"></td>
		</tr>
	</table>
	<button class="ClearSelection">Nieuw product</button>
	<button id="ItemManagerDeleteItemButton">Verwijder</button>
	<div>
		<form id="ManageItemForm">
			<input type="hidden" name="id">
			<table>
				<tr>
					<td>Naam</td>
					<td><input name="name"></td>
				</tr>
				<tr>
					<td></td><td>Kost</td><td>Prijs</td><td>Verdien</td>
				</tr>
				<tr>
					<td>exc.</td>
					<td><input type="number" name="cost_exc"></td>
					<td><input type="number" name="price_exc"></td>
					<td><input name="profit"></td>
				</tr>
				<tr>
					<td>inc.</td>
					<td><input type="number" name="cost_inc"></td>
					<td><input type="number" name="price_inc"></td>
				</tr>
			</table>
			<input type="submit" value="Opslaan">
		</form>
	</div>
</div>