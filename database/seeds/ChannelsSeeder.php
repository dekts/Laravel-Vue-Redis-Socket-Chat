<?php

use Illuminate\Database\Seeder;
use App\Channel;

class ChannelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Channel::truncate();

        $channels = [
            'Web Development',
            'Android Development',
            'iOS Development',
            'AI',
        ];

        foreach ($channels as $name) {
            Channel::forceCreate(['name' => $name]);
        }
    }
}
