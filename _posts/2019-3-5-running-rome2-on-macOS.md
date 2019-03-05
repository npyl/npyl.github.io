Lately, I've been spending quite a lot time at my friend's because he owns Total War Rome II, a very cool game.
{: .text-justify}

[This](http://wine.1045685.n8.nabble.com/PATCH-xaudio2-Use-assembly-wrapper-to-call-OnVoiceProcessingPassStart-callback-td5980759.html) is the patch that has broken (?) wine. (Supposedly, by reverting ***ONLY*** this patch and keeping everything as it is and building wine by yourself should give you the advantage of recent updates in xaudio and a working rome2 - but that was too much for me and my macbook.)
{: .text-justify}

I downloaded `xaudio2_7.dll.so` from wine-staging-2.5.
{: .text-justify}

I replaced the up-to-date version that shipped with wine-devel-4.2 with the one I downloaded from wines repo and kept the `xaudio2_7.dll` that resides in system32 of your `.wine` (or whatever it's called) as it is.
{: .text-justify}

You can find the dll I used in [my dropbox](https://www.dropbox.com/s/13s4rl4lfnujazi/xaudio2_7.dll.so?dl=0) or download it for yourself from wine's binary repo.  (Just remember that staging-2.5 works.)
{: .text-justify}
